import { Directive, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../services/growthbook-singleton/growthbook-singleton.service";
export class GbFeatureHideDirective {
    constructor(elemRef, growthbookSingletonService) {
        this.elemRef = elemRef;
        this.growthbookSingletonService = growthbookSingletonService;
        this.featureKey = '';
        this.defaultVal = false;
        this.featureVal = false;
        this.growthbookSubscription$ = new Subscription();
    }
    ngOnInit() {
        this.featureVal = this.defaultVal;
        this.previousDisplayVal = this.elemRef.nativeElement.style.display;
        this.updateView(this.featureVal);
        this.growthbookSubscription$ = this.growthbookSingletonService.subscribe(this.verifyForUpdate.bind(this));
    }
    async ngOnChanges(changes) {
        if ((changes.featureKey && !changes.featureKey.isFirstChange()) ||
            (changes.defaultVal && !changes.defaultVal.isFirstChange())) {
            await this.verifyForUpdate();
        }
    }
    async verifyForUpdate() {
        const featureVal = await this.growthbookSingletonService.evalFeature(this.featureKey);
        if (featureVal !== null && this.featureVal !== featureVal) {
            this.featureVal = featureVal;
            this.updateView(this.featureVal);
        }
        else if (featureVal === null) {
            this.featureVal = this.defaultVal;
            this.updateView(this.defaultVal);
        }
    }
    updateView(hide) {
        if (hide) {
            this.elemRef.nativeElement.style.display = 'none';
        }
        else {
            if (typeof this.previousDisplayVal === 'string') {
                this.elemRef.nativeElement.style.display = this.previousDisplayVal;
            }
            else {
                this.elemRef.nativeElement.style.display = '';
            }
        }
    }
    ngOnDestroy() {
        if (this.growthbookSubscription$) {
            this.growthbookSingletonService.unsubscribe(this.growthbookSubscription$);
        }
    }
}
GbFeatureHideDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GbFeatureHideDirective, deps: [{ token: i0.ElementRef }, { token: i1.GrowthbookSingletonService }], target: i0.ɵɵFactoryTarget.Directive });
GbFeatureHideDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.6", type: GbFeatureHideDirective, selector: "gb-feature-hide", inputs: { featureKey: ["gb-feature-key", "featureKey"], defaultVal: ["gb-default-val", "defaultVal"] }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GbFeatureHideDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gb-feature-hide'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.GrowthbookSingletonService }]; }, propDecorators: { featureKey: [{
                type: Input,
                args: ['gb-feature-key']
            }], defaultVal: [{
                type: Input,
                args: ['gb-default-val']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2ItZmVhdHVyZS1oaWRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dyb3d0aGJvb2stcmVtb3RlLWNvbmZpZy9zcmMvbGliL2RpcmVjdGl2ZXMvZ2ItZmVhdHVyZS1oaWRlL2diLWZlYXR1cmUtaGlkZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQU1wQyxNQUFNLE9BQU8sc0JBQXNCO0lBU2pDLFlBQ1UsT0FBbUIsRUFDbkIsMEJBQXNEO1FBRHRELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQVZ2QyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFcEMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUduQiw0QkFBdUIsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUtoRSxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQXNCO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMzRCxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUU7WUFDL0QsTUFBTSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLGVBQWU7UUFDbkIsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUvRixJQUFJLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7WUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbEM7YUFBTSxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFhO1FBQ3RCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDbkQ7YUFBTTtZQUNMLElBQUksT0FBTyxJQUFJLENBQUMsa0JBQWtCLEtBQUssUUFBUSxFQUFFO2dCQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzthQUNwRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzthQUMvQztTQUNGO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNoQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQzNFO0lBQ0gsQ0FBQzs7bUhBekRVLHNCQUFzQjt1R0FBdEIsc0JBQXNCOzJGQUF0QixzQkFBc0I7a0JBSGxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7MElBRTBCLFVBQVU7c0JBQWxDLEtBQUs7dUJBQUMsZ0JBQWdCO2dCQUNFLFVBQVU7c0JBQWxDLEtBQUs7dUJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBHcm93dGhib29rU2luZ2xldG9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dyb3d0aGJvb2stc2luZ2xldG9uL2dyb3d0aGJvb2stc2luZ2xldG9uLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdnYi1mZWF0dXJlLWhpZGUnXG59KVxuZXhwb3J0IGNsYXNzIEdiRmVhdHVyZUhpZGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCdnYi1mZWF0dXJlLWtleScpIGZlYXR1cmVLZXkgPSAnJztcbiAgQElucHV0KCdnYi1kZWZhdWx0LXZhbCcpIGRlZmF1bHRWYWwgPSBmYWxzZTtcblxuICBwcml2YXRlIGZlYXR1cmVWYWwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBwcmV2aW91c0Rpc3BsYXlWYWw6IGFueTtcblxuICBwcml2YXRlIGdyb3d0aGJvb2tTdWJzY3JpcHRpb24kOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtUmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgZ3Jvd3RoYm9va1NpbmdsZXRvblNlcnZpY2U6IEdyb3d0aGJvb2tTaW5nbGV0b25TZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mZWF0dXJlVmFsID0gdGhpcy5kZWZhdWx0VmFsO1xuICAgIHRoaXMucHJldmlvdXNEaXNwbGF5VmFsID0gdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5mZWF0dXJlVmFsKTtcblxuICAgIHRoaXMuZ3Jvd3RoYm9va1N1YnNjcmlwdGlvbiQgPSB0aGlzLmdyb3d0aGJvb2tTaW5nbGV0b25TZXJ2aWNlLnN1YnNjcmliZSh0aGlzLnZlcmlmeUZvclVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoKGNoYW5nZXMuZmVhdHVyZUtleSAmJiAhY2hhbmdlcy5mZWF0dXJlS2V5LmlzRmlyc3RDaGFuZ2UoKSkgfHxcbiAgICAgICAgKGNoYW5nZXMuZGVmYXVsdFZhbCAmJiAhY2hhbmdlcy5kZWZhdWx0VmFsLmlzRmlyc3RDaGFuZ2UoKSkpIHtcbiAgICAgIGF3YWl0IHRoaXMudmVyaWZ5Rm9yVXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdmVyaWZ5Rm9yVXBkYXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGZlYXR1cmVWYWwgPSBhd2FpdCB0aGlzLmdyb3d0aGJvb2tTaW5nbGV0b25TZXJ2aWNlLmV2YWxGZWF0dXJlPGJvb2xlYW4+KHRoaXMuZmVhdHVyZUtleSk7XG5cbiAgICBpZiAoZmVhdHVyZVZhbCAhPT0gbnVsbCAmJiB0aGlzLmZlYXR1cmVWYWwgIT09IGZlYXR1cmVWYWwpIHtcbiAgICAgIHRoaXMuZmVhdHVyZVZhbCA9IGZlYXR1cmVWYWw7XG4gICAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5mZWF0dXJlVmFsKTtcbiAgICB9IGVsc2UgaWYgKGZlYXR1cmVWYWwgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZmVhdHVyZVZhbCA9IHRoaXMuZGVmYXVsdFZhbDtcbiAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmRlZmF1bHRWYWwpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVZpZXcoaGlkZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChoaWRlKSB7XG4gICAgICB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJldmlvdXNEaXNwbGF5VmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5wcmV2aW91c0Rpc3BsYXlWYWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ3Jvd3RoYm9va1N1YnNjcmlwdGlvbiQpIHtcbiAgICAgIHRoaXMuZ3Jvd3RoYm9va1NpbmdsZXRvblNlcnZpY2UudW5zdWJzY3JpYmUodGhpcy5ncm93dGhib29rU3Vic2NyaXB0aW9uJCk7XG4gICAgfVxuICB9XG59XG5cblxuIl19