export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            HOST: string | undefined;
            USER: string;
            PASSWORD: string;
            DB: string;
        }
    }
}