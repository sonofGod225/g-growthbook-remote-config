import { InjectionToken } from '@angular/core';
import { GrowthBook } from '@growthbook/growthbook';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare const GROWTHBOOK_CONFIG: InjectionToken<GrowthbookConfig>;
export interface GrowthbookConfig {
    apiKey: string;
    featuresEndpoint?: string;
}
declare type FeatureValType = string | number | boolean | null;
export declare class GrowthbookSingletonService {
    private growthbookSingleton;
    private growthbookSubject;
    private updateCount;
    constructor(config: GrowthbookConfig);
    updateApiConfiguration(config: GrowthbookConfig): Promise<void>;
    setAttributes(attrs: Object): Promise<void>;
    evalFeature<T extends FeatureValType>(featureKey: string): Promise<T | null>;
    getGrowthbookInstance(): Promise<GrowthBook>;
    triggerUpdate(): void;
    subscribe(callback: (n: number) => void): Subscription;
    unsubscribe(sub: Subscription): void;
    private makeEndpointWithKey;
    static ɵfac: i0.ɵɵFactoryDeclaration<GrowthbookSingletonService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GrowthbookSingletonService>;
}
export {};
