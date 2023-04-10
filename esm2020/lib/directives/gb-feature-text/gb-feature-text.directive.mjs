import { Directive, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../services/growthbook-singleton/growthbook-singleton.service";
export class GbFeatureTextDirective {
    constructor(elemRef, growthbookSingletonService) {
        this.elemRef = elemRef;
        this.growthbookSingletonService = growthbookSingletonService;
        this.featureKey = '';
        this.defaultVal = '';
        this.featureVal = '';
        this.growthbookSubscription$ = new Subscription();
    }
    ngOnInit() {
        this.featureVal = this.defaultVal;
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
    updateView(strVal) {
        if (strVal) {
            this.elemRef.nativeElement.innerHTML = strVal;
        }
    }
    ngOnDestroy() {
        if (this.growthbookSubscription$) {
            this.growthbookSingletonService.unsubscribe(this.growthbookSubscription$);
        }
    }
}
GbFeatureTextDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GbFeatureTextDirective, deps: [{ token: i0.ElementRef }, { token: i1.GrowthbookSingletonService }], target: i0.ɵɵFactoryTarget.Directive });
GbFeatureTextDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.6", type: GbFeatureTextDirective, selector: "gb-feature-text", inputs: { featureKey: ["gb-feature-key", "featureKey"], defaultVal: ["gb-default-val", "defaultVal"] }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GbFeatureTextDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gb-feature-text'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.GrowthbookSingletonService }]; }, propDecorators: { featureKey: [{
                type: Input,
                args: ['gb-feature-key']
            }], defaultVal: [{
                type: Input,
                args: ['gb-default-val']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2ItZmVhdHVyZS10ZXh0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dyb3d0aGJvb2stcmVtb3RlLWNvbmZpZy9zcmMvbGliL2RpcmVjdGl2ZXMvZ2ItZmVhdHVyZS10ZXh0L2diLWZlYXR1cmUtdGV4dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQU1wQyxNQUFNLE9BQU8sc0JBQXNCO0lBUWpDLFlBQ1UsT0FBbUIsRUFDbkIsMEJBQXNEO1FBRHRELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQVR2QyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFakMsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVoQiw0QkFBdUIsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUtoRSxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQXNCO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMzRCxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUU7WUFDL0QsTUFBTSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLGVBQWU7UUFDbkIsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFTLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU5RixJQUFJLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7WUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbEM7YUFBTSxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFjO1FBQ3ZCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUMvQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7O21IQWpEVSxzQkFBc0I7dUdBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQUhsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOzBJQUUwQixVQUFVO3NCQUFsQyxLQUFLO3VCQUFDLGdCQUFnQjtnQkFDRSxVQUFVO3NCQUFsQyxLQUFLO3VCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR3Jvd3RoYm9va1NpbmdsZXRvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ncm93dGhib29rLXNpbmdsZXRvbi9ncm93dGhib29rLXNpbmdsZXRvbi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnZ2ItZmVhdHVyZS10ZXh0J1xufSlcbmV4cG9ydCBjbGFzcyBHYkZlYXR1cmVUZXh0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgnZ2ItZmVhdHVyZS1rZXknKSBmZWF0dXJlS2V5ID0gJyc7XG4gIEBJbnB1dCgnZ2ItZGVmYXVsdC12YWwnKSBkZWZhdWx0VmFsID0gJyc7XG5cbiAgcHJpdmF0ZSBmZWF0dXJlVmFsID0gJyc7XG5cbiAgcHJpdmF0ZSBncm93dGhib29rU3Vic2NyaXB0aW9uJDogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGdyb3d0aGJvb2tTaW5nbGV0b25TZXJ2aWNlOiBHcm93dGhib29rU2luZ2xldG9uU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmVhdHVyZVZhbCA9IHRoaXMuZGVmYXVsdFZhbDtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5mZWF0dXJlVmFsKTtcblxuICAgIHRoaXMuZ3Jvd3RoYm9va1N1YnNjcmlwdGlvbiQgPSB0aGlzLmdyb3d0aGJvb2tTaW5nbGV0b25TZXJ2aWNlLnN1YnNjcmliZSh0aGlzLnZlcmlmeUZvclVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoKGNoYW5nZXMuZmVhdHVyZUtleSAmJiAhY2hhbmdlcy5mZWF0dXJlS2V5LmlzRmlyc3RDaGFuZ2UoKSkgfHxcbiAgICAgICAgKGNoYW5nZXMuZGVmYXVsdFZhbCAmJiAhY2hhbmdlcy5kZWZhdWx0VmFsLmlzRmlyc3RDaGFuZ2UoKSkpIHtcbiAgICAgIGF3YWl0IHRoaXMudmVyaWZ5Rm9yVXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdmVyaWZ5Rm9yVXBkYXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGZlYXR1cmVWYWwgPSBhd2FpdCB0aGlzLmdyb3d0aGJvb2tTaW5nbGV0b25TZXJ2aWNlLmV2YWxGZWF0dXJlPHN0cmluZz4odGhpcy5mZWF0dXJlS2V5KTtcblxuICAgIGlmIChmZWF0dXJlVmFsICE9PSBudWxsICYmIHRoaXMuZmVhdHVyZVZhbCAhPT0gZmVhdHVyZVZhbCkge1xuICAgICAgdGhpcy5mZWF0dXJlVmFsID0gZmVhdHVyZVZhbDtcbiAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmZlYXR1cmVWYWwpO1xuICAgIH0gZWxzZSBpZiAoZmVhdHVyZVZhbCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5mZWF0dXJlVmFsID0gdGhpcy5kZWZhdWx0VmFsO1xuICAgICAgdGhpcy51cGRhdGVWaWV3KHRoaXMuZGVmYXVsdFZhbCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVmlldyhzdHJWYWw6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChzdHJWYWwpIHtcbiAgICAgIHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHN0clZhbDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ncm93dGhib29rU3Vic2NyaXB0aW9uJCkge1xuICAgICAgdGhpcy5ncm93dGhib29rU2luZ2xldG9uU2VydmljZS51bnN1YnNjcmliZSh0aGlzLmdyb3d0aGJvb2tTdWJzY3JpcHRpb24kKTtcbiAgICB9XG4gIH1cbn1cblxuXG4iXX0=