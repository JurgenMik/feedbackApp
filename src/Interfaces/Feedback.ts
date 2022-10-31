export interface feedbackInterface {
    id: number,
    title: string,
    category: string,
    upvotes: number,
    status: string,
    description: string,
    comments ?: Array<object | undefined>
    replies ?: Array<object | undefined>
}

export interface category {
    isActive: string,
}

export interface roadmap {
    planned: number,
    live: number,
    in_progress: number,
}
