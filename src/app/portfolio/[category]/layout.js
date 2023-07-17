import LayoutCategory from "./layoutCategory";

export async function generateMetadata({ params}) {
    // read route params
    const category = params.category
   
   
    return {
      title: category,
    }
  }

  export default LayoutCategory;