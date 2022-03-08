import { createCurrentUserHook, createPreviewSubscriptionHook } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url';
import {config} from "./sanity-client";

export const usePreviewSubscription = createPreviewSubscriptionHook(config); // helps to generate Image URl's
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const useCurrentUser = createCurrentUserHook(config);

