import type { Metadata } from "next";
import NotionPreview from "@/components/ui/notion-preview";
import recipes from "@/app/food/recipes.json";
import PageTitle from "@/components/ui/page-title";
const title: { title: string; subtitle?: string } = {
    title: "My Recipes",
    subtitle: "I've loved cooking and baking for as long as I remember.    Its a way for me to express love to others while fulfilling their basic needs and a creative outlet that never runs dry.    Here are some of my favorite recipes."
}
export default function FoodPage() {
    
    return (
        <main>
            <PageTitle components={ title } />
            <section className="container">
                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 ">
                    { recipes.sort((a, b) => a.title.localeCompare(b.title)).map((recipe, index) => (
                        <NotionPreview key={ index } page={recipe} />
                    )) }
                </div>
            </section>
        </main>
    );
}

export let metadata: Metadata = {
    title: "My Recipes"
};