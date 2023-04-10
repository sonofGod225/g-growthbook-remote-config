import { NgModule } from '@angular/core';
import { GbFeatureAbShowDirective } from './directives/gb-feature-ab-show/gb-feature-ab-show.directive';
import { GbFeatureHideDirective } from './directives/gb-feature-hide/gb-feature-hide.directive';
import { GbFeatureShowDirective } from './directives/gb-feature-show/gb-feature-show.directive';
import { GbFeatureTextDirective } from './directives/gb-feature-text/gb-feature-text.directive';
import { GROWTHBOOK_CONFIG } from './services/growthbook-singleton/growthbook-singleton.service';
import * as i0 from "@angular/core";
export function coreDirectives() {
    return [
        GbFeatureShowDirective,
        GbFeatureHideDirective,
        GbFeatureTextDirective,
        GbFeatureAbShowDirective,
    ];
}
export class GrowthbookRemoteConfigModule {
    static forRoot(config) {
        return {
            ngModule: GrowthbookRemoteConfigModule,
            providers: [
                { provide: GROWTHBOOK_CONFIG, useValue: config },
            ],
        };
    }
}
GrowthbookRemoteConfigModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GrowthbookRemoteConfigModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GrowthbookRemoteConfigModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.6", ngImport: i0, type: GrowthbookRemoteConfigModule, declarations: [GbFeatureShowDirective,
        GbFeatureHideDirective,
        GbFeatureTextDirective,
        GbFeatureAbShowDirective], exports: [GbFeatureShowDirective,
        GbFeatureHideDirective,
        GbFeatureTextDirective,
        GbFeatureAbShowDirective] });
GrowthbookRemoteConfigModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GrowthbookRemoteConfigModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GrowthbookRemoteConfigModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: coreDirectives(),
                    exports: coreDirectives(),
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Jvd3RoYm9vay1yZW1vdGUtY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2dyb3d0aGJvb2stcmVtb3RlLWNvbmZpZy9zcmMvbGliL2dyb3d0aGJvb2stcmVtb3RlLWNvbmZpZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDeEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDaEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDaEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDaEcsT0FBTyxFQUFvQixpQkFBaUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDOztBQUVuSCxNQUFNLFVBQVUsY0FBYztJQUM1QixPQUFPO1FBQ0wsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsd0JBQXdCO0tBQ3pCLENBQUM7QUFDSixDQUFDO0FBTUQsTUFBTSxPQUFPLDRCQUE0QjtJQUN2QyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXdCO1FBQ3JDLE9BQU87WUFDTCxRQUFRLEVBQUUsNEJBQTRCO1lBQ3RDLFNBQVMsRUFBRTtnQkFDVCxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO2FBQy9DO1NBQ0YsQ0FBQztJQUNKLENBQUM7O3lIQVJVLDRCQUE0QjswSEFBNUIsNEJBQTRCLGlCQVhyQyxzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qix3QkFBd0IsYUFIeEIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsd0JBQXdCOzBIQVFmLDRCQUE0QjsyRkFBNUIsNEJBQTRCO2tCQUp4QyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxjQUFjLEVBQUU7b0JBQzlCLE9BQU8sRUFBRSxjQUFjLEVBQUU7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdiRmVhdHVyZUFiU2hvd0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9nYi1mZWF0dXJlLWFiLXNob3cvZ2ItZmVhdHVyZS1hYi1zaG93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHYkZlYXR1cmVIaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2diLWZlYXR1cmUtaGlkZS9nYi1mZWF0dXJlLWhpZGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEdiRmVhdHVyZVNob3dEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZ2ItZmVhdHVyZS1zaG93L2diLWZlYXR1cmUtc2hvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgR2JGZWF0dXJlVGV4dERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9nYi1mZWF0dXJlLXRleHQvZ2ItZmVhdHVyZS10ZXh0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHcm93dGhib29rQ29uZmlnLCBHUk9XVEhCT09LX0NPTkZJRyB9IGZyb20gJy4vc2VydmljZXMvZ3Jvd3RoYm9vay1zaW5nbGV0b24vZ3Jvd3RoYm9vay1zaW5nbGV0b24uc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3JlRGlyZWN0aXZlcygpIHtcbiAgcmV0dXJuIFtcbiAgICBHYkZlYXR1cmVTaG93RGlyZWN0aXZlLFxuICAgIEdiRmVhdHVyZUhpZGVEaXJlY3RpdmUsXG4gICAgR2JGZWF0dXJlVGV4dERpcmVjdGl2ZSxcbiAgICBHYkZlYXR1cmVBYlNob3dEaXJlY3RpdmUsXG4gIF07XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogY29yZURpcmVjdGl2ZXMoKSxcbiAgZXhwb3J0czogY29yZURpcmVjdGl2ZXMoKSxcbn0pXG5leHBvcnQgY2xhc3MgR3Jvd3RoYm9va1JlbW90ZUNvbmZpZ01vZHVsZSB7IFxuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IEdyb3d0aGJvb2tDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEdyb3d0aGJvb2tSZW1vdGVDb25maWdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEdyb3d0aGJvb2tSZW1vdGVDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6IEdST1dUSEJPT0tfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19