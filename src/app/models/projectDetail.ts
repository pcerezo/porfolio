import { ProjectSummary } from "./projectSummary";

export interface ProjectDetail extends ProjectSummary {
    description: string;
    responsibilities: string;
    project_url: string;
    repository_url: string;
    status: string;
    images: { image_url: string, alt_text: string, order: number }[];
}