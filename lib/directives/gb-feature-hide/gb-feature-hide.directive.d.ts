import { ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { GrowthbookSingletonService } from '../../services/growthbook-singleton/growthbook-singleton.service';
import * as i0 from "@angular/core";
export declare class GbFeatureHideDirective implements OnInit, OnDestroy, OnChanges {
    private elemRef;
    private growthbookSingletonService;
    featureKey: string;
    defaultVal: boolean;
    private featureVal;
    private previousDisplayVal;
    private growthbookSubscription$;
    constructor(elemRef: ElementRef, growthbookSingletonService: GrowthbookSingletonService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): Promise<void>;
    verifyForUpdate(): Promise<void>;
    updateView(hide: boolean): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GbFeatureHideDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GbFeatureHideDirective, "gb-feature-hide", never, { "featureKey": "gb-feature-key"; "defaultVal": "gb-default-val"; }, {}, never, never, false, never>;
}
