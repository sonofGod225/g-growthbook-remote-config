import { ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { GrowthbookSingletonService } from '../../services/growthbook-singleton/growthbook-singleton.service';
import * as i0 from "@angular/core";
export declare class GbFeatureTextDirective implements OnInit, OnDestroy, OnChanges {
    private elemRef;
    private growthbookSingletonService;
    featureKey: string;
    defaultVal: string;
    private featureVal;
    private growthbookSubscription$;
    constructor(elemRef: ElementRef, growthbookSingletonService: GrowthbookSingletonService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): Promise<void>;
    verifyForUpdate(): Promise<void>;
    updateView(strVal: string): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GbFeatureTextDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GbFeatureTextDirective, "gb-feature-text", never, { "featureKey": "gb-feature-key"; "defaultVal": "gb-default-val"; }, {}, never, never, false, never>;
}
