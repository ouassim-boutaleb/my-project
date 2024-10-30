const Categories = () => {
    const data = [
        {
            icon: <i class="fa-solid fa-shirt"></i> ,
            name: 'Fashion'
        },
        {
            icon: <i class="fa-solid fa-shirt"></i> ,
            name: 'Electronic'
        },
        {
            icon: <i class="fa-solid fa-shirt"></i> ,
            name: 'Cars'
        },
        {
            icon: <i class="fa-solid fa-shirt"></i> ,
            name: 'Home & Garden'
        },
        {
            icon: <i class="fa-solid fa-shirt"></i> ,
            name: 'Gifts'
        },
        {
            icon: <i class="fa-solid fa-shirt"></i> ,
            name: 'Music'
        },
        {
            icon: <i class="fa-solid fa-shirt"></i> ,
            name: 'Health & beauty'
        },
        {
            icon: <i class="fa-solid fa-shirt"></i> ,
            name: 'Pets'
        },
        {
            icon: <i class="fa-solid fa-shirt"></i> ,
            name: 'Baby Toys'
        },
        {
            icon: <i class="fa-solid fa-shirt"></i> ,
            name: 'Groceries'
        },
        {
            icon: <i class="fa-solid fa-shirt"></i> ,
            name: 'Books'
        }
    ]
    return ( 
        <section className="categories">
            
                {data.map((value, index)=> (
                    <div className="item" key={index}>
                        {value.icon}
                        <span>{value.name}</span>
                    </div>
                ))}
            
        </section>
     );
}
 
export default Categories;