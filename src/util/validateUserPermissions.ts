type User = {
    username: string
}

type Params = {
    user?: User,
    role?: string
}

export function ValidateUserPermissions(params: Params) {
    const { user } = params;

    let hasPermission = true;

    if (user?.username.length) {
        hasPermission = (user?.username) ? true : false;
    }

    return { hasPermission }
}