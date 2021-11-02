import LatestRecipes from "../components/homepage/LatestRecipes";
import SearchRecipes from "../components/homepage/SearchRecipes";

export default function HomePage({ categories, tags, recipes }) {
  return (
    <>
      <LatestRecipes recipes={recipes} />
      <SearchRecipes tags={tags} recipes={recipes} />
    </>
  );
}

export async function getStaticProps() {
  const [categoriesRes, tagsRes, recipesRes] = await Promise.all([
    fetch("http://localhost:1337/categories"),
    fetch("http://localhost:1337/tags"),
    fetch("http://localhost:1337/recipes"),
  ]);

  const [categories, tags, recipes] = await Promise.all([
    categoriesRes.json(),
    tagsRes.json(),
    recipesRes.json(),
  ]);

  return {
    props: {
      categories,
      tags,
      recipes,
    },
  };
}
