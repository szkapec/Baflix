import React from 'react'
import styled from 'styled-components';

export default function Information() {
    return (
        <StyledAll>
            
            Informacje o stronie

            <div>Zdjęcia wykorzystane ze strony <a href="https://pixabay.com/pl/">https://pixabay.com/pl/</a> </div>
            <div><a href="https://www.bootstrapcdn.com/">bootstrap</a>  </div>
            <div><a href="https://fontawesome.com/">Fontawesome</a>  </div>

            <ul>Informacje o technologii
                <li>React</li>
                <li>Styled-Components</li>
                <li>React Hook</li>
                <li>Context API</li>
                <li>Swiper slide</li>
                
                <li>axios</li>
                <li>Node</li>
                <li>Express</li>
                <li>Mongo DB</li>
            </ul>
            <div> 
                {/* <div> to do poprawy:</div>
                <div>przyciski na mobilce;</div>
                <div>jeden slider;</div>
                <div>moze logowanie i rejestracje?</div>
                <div>step 2 of 3 and step 3 of 3</div> */}
            </div>
        </StyledAll>
    )
}


const StyledAll = styled.div`
    margin-top: 60px;
    margin-left: 40px;
    color:white;
    
`