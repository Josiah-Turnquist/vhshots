import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type ContactFormMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerContactForm = {
  readonly id: string;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly Subject?: string | null;
  readonly Message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContactForm = {
  readonly id: string;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly Subject?: string | null;
  readonly Message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContactForm = LazyLoading extends LazyLoadingDisabled ? EagerContactForm : LazyContactForm

export declare const ContactForm: (new (init: ModelInit<ContactForm, ContactFormMetaData>) => ContactForm) & {
  copyOf(source: ContactForm, mutator: (draft: MutableModel<ContactForm, ContactFormMetaData>) => MutableModel<ContactForm, ContactFormMetaData> | void): ContactForm;
}