export type CurrentSession = {
	id: string;
	createdAt: Date;
	updatedAt?: Date;
	expiresAt: Date;
	userId: string;
};

export type CurrentSessionUser = {
	id: string;
	profileImageUrl?: string | null;
	email: string;
	name: string;
};
