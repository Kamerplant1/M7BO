import './AboutMe.css';

export function AboutMe(){
    return(
        <div className="AboutMe__container">
            <div className="AboutMe">
                <h2 className="AboutMe__title">About Me</h2>
                <p className="AboutMe__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quae repellat exercitationem excepturi corporis quaerat dignissimos hic, officia similique distinctio iste neque debitis aliquid fuga dolore dolorem nesciunt voluptatum tempore.</p>
            </div>
            <img className="AboutMe__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNb5nbP7WCYxHGuwLFl8f-P9luge5jOjs2Sw&s" alt="image" />
        </div>
    )
}