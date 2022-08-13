import {Component, OnInit} from '@angular/core';
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {LoadingController, ToastController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, finalize} from 'rxjs/operators';



@Component({
    selector: 'app-blog',
    templateUrl: './blog.page.html',
    styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
    public error: string | null = null;
    photo: SafeResourceUrl | null = null;
    private counter = 0;
    private loading: HTMLIonLoadingElement | null = null;

    constructor(private readonly http: HttpClient,
                private readonly sanitizer: DomSanitizer,
                private readonly loadingCtrl: LoadingController,
                private readonly toastCtrl: ToastController) {
    }

    ngOnInit() {
    }

    async takePhoto(): Promise<void> {
        const ab = await this.getPhoto(CameraSource.Camera);
        if (ab) {
            await this.uploadAll(ab);
        }
    }


    private async getPhoto(source: CameraSource): Promise<string | undefined> {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Uri,
            source
        });

        if (image.webPath) {
            this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image.webPath);
        }
        return image.webPath;
    }

    private async uploadAll(webPath: string): Promise<void> {
        this.loading = await this.loadingCtrl.create({
            message: 'Uploading...'
        });
        await this.loading.present();

        const blob = await fetch(webPath).then(r => r.blob());

        const formData = new FormData();
        formData.append('file', blob, `file-${this.counter++}.jpg`);
        this.http.post<boolean>(`${environment.apiUrl}/image/129/upload`, formData)
            .pipe(
                catchError(e => this.handleError(e)),
                finalize(() => this.loading?.dismiss())
            )
            .subscribe(ok => this.showToast(ok));
    }

    private async showToast(ok: boolean): Promise<void> {
        if (ok) {
            const toast = await this.toastCtrl.create({
                message: 'Upload successful',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        } else {
            const toast = await this.toastCtrl.create({
                message: 'Upload failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    }

    private handleError(error: any): Observable<never> {
        const errMsg = error.message ? error.message : error.toString();
        this.error = errMsg;
        return throwError(errMsg);
    }
}

