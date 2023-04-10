import { Inject, Injectable, InjectionToken } from '@angular/core';
import { GrowthBook } from '@growthbook/growthbook';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
const DEFAULT_FEATURES_ENDPOINT = 'https://cdn.growthbook.io/api/features';
export const GROWTHBOOK_CONFIG = new InjectionToken('growthbook-singleton GROWTHBOOK_CONFIG');
export class GrowthbookSingletonService {
    constructor(config) {
        this.growthbookSubject = new Subject();
        this.updateCount = 0;
        this.updateApiConfiguration(config);
    }
    async updateApiConfiguration(config) {
        const growthbook = new GrowthBook();
        this.growthbookSingleton = new Promise((resolve, _) => {
            fetch(this.makeEndpointWithKey(config))
                .then((res) => res.json())
                .then((json) => {
                growthbook.setFeatures(json.features);
                resolve(growthbook);
            });
        });
        return this.growthbookSingleton.then(() => { });
    }
    async setAttributes(attrs) {
        return this.growthbookSingleton.then((growthbook) => {
            growthbook.setAttributes(attrs);
            this.triggerUpdate();
        });
    }
    async evalFeature(featureKey) {
        return this.growthbookSingleton.then((growthbook) => {
            const val = growthbook.evalFeature(featureKey);
            return val.value;
        });
    }
    async getGrowthbookInstance() {
        return this.growthbookSingleton;
    }
    triggerUpdate() {
        this.growthbookSubject.next(this.updateCount++);
    }
    subscribe(callback) {
        callback(0);
        return this.growthbookSubject.subscribe(callback);
    }
    unsubscribe(sub) {
        return sub.unsubscribe();
    }
    makeEndpointWithKey(config) {
        let endpoint = '';
        if (typeof config.featuresEndpoint === 'string') {
            endpoint = `${config.featuresEndpoint}/${config.apiKey}`;
        }
        else {
            endpoint = `${DEFAULT_FEATURES_ENDPOINT}/${config.apiKey}`;
        }
        return endpoint;
    }
}
GrowthbookSingletonService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GrowthbookSingletonService, deps: [{ token: GROWTHBOOK_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
GrowthbookSingletonService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GrowthbookSingletonService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GrowthbookSingletonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [GROWTHBOOK_CONFIG]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Jvd3RoYm9vay1zaW5nbGV0b24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dyb3d0aGJvb2stcmVtb3RlLWNvbmZpZy9zcmMvbGliL3NlcnZpY2VzL2dyb3d0aGJvb2stc2luZ2xldG9uL2dyb3d0aGJvb2stc2luZ2xldG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQzs7QUFFN0MsTUFBTSx5QkFBeUIsR0FBRyx3Q0FBd0MsQ0FBQztBQUUzRSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGNBQWMsQ0FBbUIsd0NBQXdDLENBQUMsQ0FBQztBQVdoSCxNQUFNLE9BQU8sMEJBQTBCO0lBS3JDLFlBQzZCLE1BQXdCO1FBSjdDLHNCQUFpQixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDMUMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFLdEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxLQUFLLENBQUMsc0JBQXNCLENBQUMsTUFBd0I7UUFDbkQsTUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxPQUFPLENBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEUsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDdEMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3pCLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNiLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFhO1FBQy9CLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLFVBQXNCLEVBQUUsRUFBRTtZQUM5RCxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVyxDQUEyQixVQUFrQjtRQUM1RCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFzQixFQUFFLEVBQUU7WUFDOUQsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBSSxVQUFVLENBQUMsQ0FBQztZQUNsRCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLHFCQUFxQjtRQUN6QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFNBQVMsQ0FBQyxRQUE2QjtRQUNyQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFpQjtRQUMzQixPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sbUJBQW1CLENBQUMsTUFBd0I7UUFDbEQsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksT0FBTyxNQUFNLENBQUMsZ0JBQWdCLEtBQUssUUFBUSxFQUFFO1lBQy9DLFFBQVEsR0FBRyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUE7U0FDekQ7YUFBTTtZQUNMLFFBQVEsR0FBRyxHQUFHLHlCQUF5QixJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtTQUMzRDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O3VIQWpFVSwwQkFBMEIsa0JBTTNCLGlCQUFpQjsySEFOaEIsMEJBQTBCLGNBRnpCLE1BQU07MkZBRVAsMEJBQTBCO2tCQUh0QyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBT0ksTUFBTTsyQkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHcm93dGhCb29rIH0gZnJvbSAnQGdyb3d0aGJvb2svZ3Jvd3RoYm9vayc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuY29uc3QgREVGQVVMVF9GRUFUVVJFU19FTkRQT0lOVCA9ICdodHRwczovL2Nkbi5ncm93dGhib29rLmlvL2FwaS9mZWF0dXJlcyc7XG5cbmV4cG9ydCBjb25zdCBHUk9XVEhCT09LX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxHcm93dGhib29rQ29uZmlnPignZ3Jvd3RoYm9vay1zaW5nbGV0b24gR1JPV1RIQk9PS19DT05GSUcnKTtcbmV4cG9ydCBpbnRlcmZhY2UgR3Jvd3RoYm9va0NvbmZpZyB7XG4gIGFwaUtleTogc3RyaW5nO1xuICBmZWF0dXJlc0VuZHBvaW50Pzogc3RyaW5nO1xufVxuXG50eXBlIEZlYXR1cmVWYWxUeXBlID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IG51bGw7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdyb3d0aGJvb2tTaW5nbGV0b25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBncm93dGhib29rU2luZ2xldG9uITogUHJvbWlzZTxHcm93dGhCb29rPjtcbiAgcHJpdmF0ZSBncm93dGhib29rU3ViamVjdCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSB1cGRhdGVDb3VudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChHUk9XVEhCT09LX0NPTkZJRykgY29uZmlnOiBHcm93dGhib29rQ29uZmlnXG4gICkgeyBcbiAgICB0aGlzLnVwZGF0ZUFwaUNvbmZpZ3VyYXRpb24oY29uZmlnKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZUFwaUNvbmZpZ3VyYXRpb24oY29uZmlnOiBHcm93dGhib29rQ29uZmlnKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZ3Jvd3RoYm9vayA9IG5ldyBHcm93dGhCb29rKCk7XG4gICAgdGhpcy5ncm93dGhib29rU2luZ2xldG9uID0gbmV3IFByb21pc2U8R3Jvd3RoQm9vaz4oKHJlc29sdmUsIF8pID0+IHtcbiAgICAgIGZldGNoKHRoaXMubWFrZUVuZHBvaW50V2l0aEtleShjb25maWcpKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIGdyb3d0aGJvb2suc2V0RmVhdHVyZXMoanNvbi5mZWF0dXJlcyk7XG4gICAgICAgIHJlc29sdmUoZ3Jvd3RoYm9vayk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmdyb3d0aGJvb2tTaW5nbGV0b24udGhlbigoKSA9PiB7fSk7XG4gIH1cblxuICBhc3luYyBzZXRBdHRyaWJ1dGVzKGF0dHJzOiBPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5ncm93dGhib29rU2luZ2xldG9uLnRoZW4oKGdyb3d0aGJvb2s6IEdyb3d0aEJvb2spID0+IHtcbiAgICAgIGdyb3d0aGJvb2suc2V0QXR0cmlidXRlcyhhdHRycyk7XG4gICAgICB0aGlzLnRyaWdnZXJVcGRhdGUoKTtcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZXZhbEZlYXR1cmU8VCBleHRlbmRzIEZlYXR1cmVWYWxUeXBlPihmZWF0dXJlS2V5OiBzdHJpbmcpOiBQcm9taXNlPFQgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuZ3Jvd3RoYm9va1NpbmdsZXRvbi50aGVuKChncm93dGhib29rOiBHcm93dGhCb29rKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBncm93dGhib29rLmV2YWxGZWF0dXJlPFQ+KGZlYXR1cmVLZXkpO1xuICAgICAgcmV0dXJuIHZhbC52YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGdldEdyb3d0aGJvb2tJbnN0YW5jZSgpOiBQcm9taXNlPEdyb3d0aEJvb2s+IHtcbiAgICByZXR1cm4gdGhpcy5ncm93dGhib29rU2luZ2xldG9uO1xuICB9XG5cbiAgdHJpZ2dlclVwZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmdyb3d0aGJvb2tTdWJqZWN0Lm5leHQodGhpcy51cGRhdGVDb3VudCsrKTtcbiAgfVxuXG4gIHN1YnNjcmliZShjYWxsYmFjazogKG46IG51bWJlcikgPT4gdm9pZCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgY2FsbGJhY2soMCk7XG4gICAgcmV0dXJuIHRoaXMuZ3Jvd3RoYm9va1N1YmplY3Quc3Vic2NyaWJlKGNhbGxiYWNrKTtcbiAgfVxuICBcbiAgdW5zdWJzY3JpYmUoc3ViOiBTdWJzY3JpcHRpb24pOiB2b2lkIHtcbiAgICByZXR1cm4gc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VFbmRwb2ludFdpdGhLZXkoY29uZmlnOiBHcm93dGhib29rQ29uZmlnKTogc3RyaW5nIHtcbiAgICBsZXQgZW5kcG9pbnQgPSAnJztcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5mZWF0dXJlc0VuZHBvaW50ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5kcG9pbnQgPSBgJHtjb25maWcuZmVhdHVyZXNFbmRwb2ludH0vJHtjb25maWcuYXBpS2V5fWBcbiAgICB9IGVsc2Uge1xuICAgICAgZW5kcG9pbnQgPSBgJHtERUZBVUxUX0ZFQVRVUkVTX0VORFBPSU5UfS8ke2NvbmZpZy5hcGlLZXl9YFxuICAgIH1cblxuICAgIHJldHVybiBlbmRwb2ludDtcbiAgfVxufVxuIl19