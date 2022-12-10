import { TemplateRef } from '@angular/core';

export interface User {
    blocked: boolean;
    confirmed: boolean;
    createdAt: string;
    email: string;
    id: number;
    provider: string;
    updatedAt: string;
    username: string;
}

export interface LoginResponse {
    jwt: string;
    user: User;
}

export interface ForgotPasswordResponse {
    ok: boolean
}

export interface TemplateRefObj {
    templateName: string;
    templateRef: TemplateRef<any>;
}

export interface ModalContent {
    modalTitle: string;
    modalBody: string;
}

export interface ApiErrorResponse {
    details: Object | {};
    message: string;
    name: string;
    status: number;
}