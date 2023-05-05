import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiFileLike} from '@taiga-ui/kit';
import {Observable, of, Subject, timer} from 'rxjs';
import {finalize, map, switchMap} from 'rxjs/operators';

@Component({
    selector: 'uploadXML',
    templateUrl: './upload.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadComponent {
    files: TuiFileLike[] =[];

    readonly rejectedFiles$ = new Subject<TuiFileLike | null>();
    readonly loadingFiles$ = new Subject<TuiFileLike | null>();
    readonly loadedFiles$ = this.rejectedFiles$.pipe(
        switchMap((file) =>
          file ? of(file) : of(null)
        )
      );

    onReject(file: TuiFileLike | readonly TuiFileLike[]): void {
        this.rejectedFiles$.next(file as TuiFileLike);
    }

    removeFile(): void {
        this.files = [];
        this.rejectedFiles$.next(null);
      }

    clearRejected(): void {
        this.removeFile();
        this.rejectedFiles$.next(null);
    }

    makeRequest(file: TuiFileLike): Observable<TuiFileLike | null> {
        this.loadingFiles$.next(file);

        return timer(1000).pipe(
            map(() => {
                if (Math.random() > 0.5) {
                    return file;
                }

                this.rejectedFiles$.next(file);

                return null;
            }),
            finalize(() => this.loadingFiles$.next(null)),
        );
    }

    onFilesChange(event: Event): void {
        const input = event.target as HTMLInputElement;
        const fileList: TuiFileLike[] = [];
    
        if (input.files != null) {
          for (let i = 0; i < input.files.length; i++) {
            fileList.push(input.files[i]);
          }
        }
    
        this.files = fileList;
        this.rejectedFiles$.next(fileList[0]);
    }
    
    
    
      
}
