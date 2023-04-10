import { ModuleWithProviders } from '@angular/core';
import { GbFeatureAbShowDirective } from './directives/gb-feature-ab-show/gb-feature-ab-show.directive';
import { GbFeatureHideDirective } from './directives/gb-feature-hide/gb-feature-hide.directive';
import { GbFeatureShowDirective } from './directives/gb-feature-show/gb-feature-show.directive';
import { GbFeatureTextDirective } from './directives/gb-feature-text/gb-feature-text.directive';
import { GrowthbookConfig } from './services/growthbook-singleton/growthbook-singleton.service';
import * as i0 from "@angular/core";
import * as i1 from "./directives/gb-feature-show/gb-feature-show.directive";
import * as i2 from "./directives/gb-feature-hide/gb-feature-hide.directive";
import * as i3 from "./directives/gb-feature-text/gb-feature-text.directive";
import * as i4 from "./directives/gb-feature-ab-show/gb-feature-ab-show.directive";
export declare function coreDirectives(): (typeof GbFeatureAbShowDirective | typeof GbFeatureShowDirective | typeof GbFeatureHideDirective | typeof GbFeatureTextDirective)[];
export declare class GrowthbookRemoteConfigModule {
    static forRoot(config: GrowthbookConfig): ModuleWithProviders<GrowthbookRemoteConfigModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GrowthbookRemoteConfigModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<GrowthbookRemoteConfigModule, [typeof i1.GbFeatureShowDirective, typeof i2.GbFeatureHideDirective, typeof i3.GbFeatureTextDirective, typeof i4.GbFeatureAbShowDirective], never, [typeof i1.GbFeatureShowDirective, typeof i2.GbFeatureHideDirective, typeof i3.GbFeatureTextDirective, typeof i4.GbFeatureAbShowDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<GrowthbookRemoteConfigModule>;
}
