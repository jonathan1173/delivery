import { MenuItemCard } from "./MenuItemCard"

export function MenuCategory({ category, items }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="text-2xl">{category.icon}</span>
        {category.name}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
