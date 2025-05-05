
export async function signUp(data: Record<string, unknown>) {
    const { data: response, error } = await fetch('/api/auth/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());

    if (error) {
        throw error;
    }
    return response;

}

