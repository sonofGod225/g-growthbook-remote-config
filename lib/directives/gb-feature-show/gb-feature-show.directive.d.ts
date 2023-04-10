import { ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { GrowthbookSingletonService } from '../../services/growthbook-singleton/growthbook-singleton.service';
import * as i0 from "@angular/core";
export declare class GbFeatureShowDirective implements OnInit, OnDestroy, OnChanges {
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
    updateView(show: boolean): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GbFeatureShowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GbFeatureShowDirective, "gb-feature-show", never, { "featureKey": "gb-feature-key"; "defaultVal": "gb-default-val"; }, {}, never, never, false, never>;
}
