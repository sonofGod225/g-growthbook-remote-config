import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, Directive, Input, NgModule } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { GrowthBook } from '@growthbook/growthbook';

const DEFAULT_FEATURES_ENDPOINT = 'https://cdn.growthbook.io/api/features';
const GROWTHBOOK_CONFIG = new InjectionToken('growthbook-singleton GROWTHBOOK_CONFIG');
class GrowthbookSingletonService {
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

class GbFeatureAbShowDirective {
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
GbFeatureAbShowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GbFeatureAbShowDirective, deps: [{ token: i0.ElementRef }, { token: GrowthbookSingletonService }], target: i0.ɵɵFactoryTarget.Directive });
GbFeatureAbShowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.6", type: GbFeatureAbShowDirective, selector: "gb-feature-ab-show", inputs: { featureKey: ["gb-feature-key", "featureKey"], abVariationKey: ["gb-ab-variation-key", "abVariationKey"], defaultShowVal: ["gb-default-val", "defaultShowVal"] }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GbFeatureAbShowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gb-feature-ab-show'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: GrowthbookSingletonService }]; }, propDecorators: { featureKey: [{
                type: Input,
                args: ['gb-feature-key']
            }], abVariationKey: [{
                type: Input,
                args: ['gb-ab-variation-key']
            }], defaultShowVal: [{
                type: Input,
                args: ['gb-default-val']
            }] } });

class GbFeatureShowDirective {
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
GbFeatureShowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GbFeatureShowDirective, deps: [{ token: i0.ElementRef }, { token: GrowthbookSingletonService }], target: i0.ɵɵFactoryTarget.Directive });
GbFeatureShowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.6", type: GbFeatureShowDirective, selector: "gb-feature-show", inputs: { featureKey: ["gb-feature-key", "featureKey"], defaultVal: ["gb-default-val", "defaultVal"] }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GbFeatureShowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gb-feature-show'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: GrowthbookSingletonService }]; }, propDecorators: { featureKey: [{
                type: Input,
                args: ['gb-feature-key']
            }], defaultVal: [{
                type: Input,
                args: ['gb-default-val']
            }] } });

class GbFeatureHideDirective {
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
GbFeatureHideDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GbFeatureHideDirective, deps: [{ token: i0.ElementRef }, { token: GrowthbookSingletonService }], target: i0.ɵɵFactoryTarget.Directive });
GbFeatureHideDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.6", type: GbFeatureHideDirective, selector: "gb-feature-hide", inputs: { featureKey: ["gb-feature-key", "featureKey"], defaultVal: ["gb-default-val", "defaultVal"] }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GbFeatureHideDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gb-feature-hide'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: GrowthbookSingletonService }]; }, propDecorators: { featureKey: [{
                type: Input,
                args: ['gb-feature-key']
            }], defaultVal: [{
                type: Input,
                args: ['gb-default-val']
            }] } });

class GbFeatureTextDirective {
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
GbFeatureTextDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GbFeatureTextDirective, deps: [{ token: i0.ElementRef }, { token: GrowthbookSingletonService }], target: i0.ɵɵFactoryTarget.Directive });
GbFeatureTextDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.6", type: GbFeatureTextDirective, selector: "gb-feature-text", inputs: { featureKey: ["gb-feature-key", "featureKey"], defaultVal: ["gb-default-val", "defaultVal"] }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: GbFeatureTextDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gb-feature-text'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: GrowthbookSingletonService }]; }, propDecorators: { featureKey: [{
                type: Input,
                args: ['gb-feature-key']
            }], defaultVal: [{
                type: Input,
                args: ['gb-default-val']
            }] } });

function coreDirectives() {
    return [
        GbFeatureShowDirective,
        GbFeatureHideDirective,
        GbFeatureTextDirective,
        GbFeatureAbShowDirective,
    ];
}
class GrowthbookRemoteConfigModule {
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

/*
 * Public API Surface of growthbook-remote-config
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GROWTHBOOK_CONFIG, GbFeatureAbShowDirective, GbFeatureHideDirective, GbFeatureShowDirective, GbFeatureTextDirective, GrowthbookRemoteConfigModule, GrowthbookSingletonService, coreDirectives };
//# sourceMappingURL=growthbook-remote-config.mjs.map
