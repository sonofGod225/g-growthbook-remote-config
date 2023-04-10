import { Directive, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../services/growthbook-singleton/growthbook-singleton.service";
export class GbFeatureAbShowDirective {
    constructor(elemRef, growthbookSingletonService) {
        this.elemRef = elemRef;
        this.growthbookSingletonService = growthbookSingletonService;
        this.featureKey = '';
        this.abVariationKey = '';
        this.defaultShowVal = false;
        this.featureVal = '';
        this.growthbookSubscription$ = new Subscription();
    }
    ngOnInit() {
        this.previousDisplayVal = this.elemRef.nativeElement.style.display;
        this.updateView(this.defaultShowVal);
        this.growthbookSubscription$ = this.growthbookSingletonService.subscribe(this.verifyForUpdate.bind(this));
    }
    async ngOnChanges(changes) {
        if ((changes.featureKey && !changes.featureKey.isFirstChange()) ||
            (changes.abVariationKey && !changes.abVariationKey.isFirstChange()) ||
            (changes.defaultShowVal && !changes.defaultShowVal.isFirstChange())) {
            await this.verifyForUpdate();
        }
    }
    async verifyForUpdate() {
        const featureVal = await this.growthbookSingletonService.evalFeature(this.featureKey);
        if (featureVal !== null) {
            this.featureVal = '' + featureVal;
            const show = this.abVariationKey === this.featureVal;
            this.updateView(show);
        }
        else if (featureVal === null) {
            this.featureVal = '';
            this.updateView(this.defaultShowVal);
        }
    }
    updateView(show) {
        if (show) {
            if (typeof this.previousDisplayVal === 'string') {
                this.elemRef.nativeElement.style.display = this.previousDisplayVal;
            }
            else {
                this.elemRef.nativeElement.style.display = '';
            }
        }
        else {
            this.elemRef.nativeElement.style.display = 'none';
        }
    }
    ngOnDestroy() {
        if (this.growthbookSubscription$) {
            this.growthbookSingletonService.unsubscribe(this.growthbookSubscription$);
        }
    }
}
GbFeatureAbShowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GbFeatureAbShowDirective, deps: [{ token: i0.ElementRef }, { token: i1.GrowthbookSingletonService }], target: i0.ɵɵFactoryTarget.Directive });
GbFeatureAbShowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.6", type: GbFeatureAbShowDirective, selector: "gb-feature-ab-show", inputs: { featureKey: ["gb-feature-key", "featureKey"], abVariationKey: ["gb-ab-variation-key", "abVariationKey"], defaultShowVal: ["gb-default-val", "defaultShowVal"] }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GbFeatureAbShowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gb-feature-ab-show'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.GrowthbookSingletonService }]; }, propDecorators: { featureKey: [{
                type: Input,
                args: ['gb-feature-key']
            }], abVariationKey: [{
                type: Input,
                args: ['gb-ab-variation-key']
            }], defaultShowVal: [{
                type: Input,
                args: ['gb-default-val']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2ItZmVhdHVyZS1hYi1zaG93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dyb3d0aGJvb2stcmVtb3RlLWNvbmZpZy9zcmMvbGliL2RpcmVjdGl2ZXMvZ2ItZmVhdHVyZS1hYi1zaG93L2diLWZlYXR1cmUtYWItc2hvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQU1wQyxNQUFNLE9BQU8sd0JBQXdCO0lBVW5DLFlBQ1UsT0FBbUIsRUFDbkIsMEJBQXNEO1FBRHRELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQVh2QyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ1gsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFeEMsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUdoQiw0QkFBdUIsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUtoRSxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ25FLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBc0I7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzNELENBQUMsT0FBTyxDQUFDLGNBQWMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbkUsQ0FBQyxPQUFPLENBQUMsY0FBYyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFO1lBQ3ZFLE1BQU0sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxlQUFlO1FBQ25CLE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBUyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFOUYsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFDLFVBQVUsQ0FBQztZQUNoQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUV2QjthQUFNLElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYTtRQUN0QixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksT0FBTyxJQUFJLENBQUMsa0JBQWtCLEtBQUssUUFBUSxFQUFFO2dCQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzthQUNwRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzthQUMvQztTQUVGO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztTQUNuRDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7O3FIQTdEVSx3QkFBd0I7eUdBQXhCLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQUhwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzBJQUUwQixVQUFVO3NCQUFsQyxLQUFLO3VCQUFDLGdCQUFnQjtnQkFDTyxjQUFjO3NCQUEzQyxLQUFLO3VCQUFDLHFCQUFxQjtnQkFDSCxjQUFjO3NCQUF0QyxLQUFLO3VCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR3Jvd3RoYm9va1NpbmdsZXRvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ncm93dGhib29rLXNpbmdsZXRvbi9ncm93dGhib29rLXNpbmdsZXRvbi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnZ2ItZmVhdHVyZS1hYi1zaG93J1xufSlcbmV4cG9ydCBjbGFzcyBHYkZlYXR1cmVBYlNob3dEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCdnYi1mZWF0dXJlLWtleScpIGZlYXR1cmVLZXkgPSAnJztcbiAgQElucHV0KCdnYi1hYi12YXJpYXRpb24ta2V5JykgYWJWYXJpYXRpb25LZXkgPSAnJztcbiAgQElucHV0KCdnYi1kZWZhdWx0LXZhbCcpIGRlZmF1bHRTaG93VmFsID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBmZWF0dXJlVmFsID0gJyc7XG4gIHByaXZhdGUgcHJldmlvdXNEaXNwbGF5VmFsOiBhbnk7XG5cbiAgcHJpdmF0ZSBncm93dGhib29rU3Vic2NyaXB0aW9uJDogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGdyb3d0aGJvb2tTaW5nbGV0b25TZXJ2aWNlOiBHcm93dGhib29rU2luZ2xldG9uU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJldmlvdXNEaXNwbGF5VmFsID0gdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5kZWZhdWx0U2hvd1ZhbCk7XG5cbiAgICB0aGlzLmdyb3d0aGJvb2tTdWJzY3JpcHRpb24kID0gdGhpcy5ncm93dGhib29rU2luZ2xldG9uU2VydmljZS5zdWJzY3JpYmUodGhpcy52ZXJpZnlGb3JVcGRhdGUuYmluZCh0aGlzKSk7XG4gIH1cblxuICBhc3luYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKChjaGFuZ2VzLmZlYXR1cmVLZXkgJiYgIWNoYW5nZXMuZmVhdHVyZUtleS5pc0ZpcnN0Q2hhbmdlKCkpIHx8XG4gICAgICAgIChjaGFuZ2VzLmFiVmFyaWF0aW9uS2V5ICYmICFjaGFuZ2VzLmFiVmFyaWF0aW9uS2V5LmlzRmlyc3RDaGFuZ2UoKSkgfHxcbiAgICAgICAgKGNoYW5nZXMuZGVmYXVsdFNob3dWYWwgJiYgIWNoYW5nZXMuZGVmYXVsdFNob3dWYWwuaXNGaXJzdENoYW5nZSgpKSkge1xuICAgICAgYXdhaXQgdGhpcy52ZXJpZnlGb3JVcGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyB2ZXJpZnlGb3JVcGRhdGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZmVhdHVyZVZhbCA9IGF3YWl0IHRoaXMuZ3Jvd3RoYm9va1NpbmdsZXRvblNlcnZpY2UuZXZhbEZlYXR1cmU8c3RyaW5nPih0aGlzLmZlYXR1cmVLZXkpO1xuXG4gICAgaWYgKGZlYXR1cmVWYWwgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZmVhdHVyZVZhbCA9ICcnK2ZlYXR1cmVWYWw7XG4gICAgICBjb25zdCBzaG93ID0gdGhpcy5hYlZhcmlhdGlvbktleSA9PT0gdGhpcy5mZWF0dXJlVmFsO1xuICAgICAgdGhpcy51cGRhdGVWaWV3KHNob3cpO1xuXG4gICAgfSBlbHNlIGlmIChmZWF0dXJlVmFsID09PSBudWxsKSB7XG4gICAgICB0aGlzLmZlYXR1cmVWYWwgPSAnJztcbiAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmRlZmF1bHRTaG93VmFsKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVWaWV3KHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc2hvdykge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZXZpb3VzRGlzcGxheVZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHRoaXMucHJldmlvdXNEaXNwbGF5VmFsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ3Jvd3RoYm9va1N1YnNjcmlwdGlvbiQpIHtcbiAgICAgIHRoaXMuZ3Jvd3RoYm9va1NpbmdsZXRvblNlcnZpY2UudW5zdWJzY3JpYmUodGhpcy5ncm93dGhib29rU3Vic2NyaXB0aW9uJCk7XG4gICAgfVxuICB9XG59XG5cblxuIl19