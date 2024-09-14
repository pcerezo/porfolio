export interface ProjectSummary {
    id: number;
    title: string;
    short_description: string;
    start_date: string;
    end_date: string;
    client: string;
    role: string;
    Technologies: { name: string }[];
    Categories: { name: string }[];
    images: { image_url: string, alt_text: string, order: number }[];
}