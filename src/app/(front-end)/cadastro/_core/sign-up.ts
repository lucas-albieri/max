import { apiSupabaseClient } from "@/utils/supabase/client";
import next from "next";

export async function signUp(data: Record<string, unknown>) {
    const { data: response, error } = await apiSupabaseClient.auth.signUp({
        email: data.email as string,
        password: data.password as string,
        options: {
            data: {
                username: data.displayName as string
            }
        }
    });
    if (error) {
        throw error;
    }
    return response;

}

export async function googleSignIn() {
    const { data, error } = await apiSupabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
            redirectTo: `${window.location.origin}/auth/callback`,
        },
    });
}