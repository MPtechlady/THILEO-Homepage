import { NavLink } from 'react-router-dom';

const categories = [
  { name: 'Skincare', path: '/skincare' },
  { name: 'Haircare', path: '/haircare' },
  { name: 'Bodycare', path: '/bodycare' },
  { name: 'Makeup', path: '/makeup' },
  { name: 'Nail Art', path: '/nailart' },
  { name: 'Best Sellers', path: '/products' },
  { name: 'Free Consultation', path: '/consultation' },
  { name: 'Return Gifts', path: '/returngifting' },
  { name: 'Online Courses', path: '/academy' },
  { name: 'Workshops', path: '#workshops' }, // scrolling
  { name: 'Testmointails', path: '#testmointails' },     // scrolling
  { name: 'Customer Services', path: '#customerservices' },      // scrolling
];

const CategoriesSection = () => {
  return (
    <div className="categories-scroll px-3 py-2 bg-light border-bottom">
      <div className="d-flex overflow-auto gap-3">
        {categories.map((cat, index) =>
          cat.path.startsWith('#') ? (
            <a
              key={index}
              href={cat.path}
              className="category-link text-decoration-none text-dark px-3"
            >
              {cat.name}
            </a>
          ) : (
            <NavLink
              key={index}
              to={cat.path}
              className={({ isActive }) =>
                `category-link text-decoration-none text-dark px-3 ${isActive ? 'active-link' : ''}`
              }
              // className="category-link text-decoration-none text-dark px-3 py-2 rounded"
              // activeClassName="active-link"
            >
              {cat.name}
            </NavLink>
          )
        )}
      </div>
    </div>
  );
}

export default CategoriesSection;
