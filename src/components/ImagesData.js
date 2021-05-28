import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";

// STYLES
export const StyledDiv = styled.div`
			img{
				width:  300px;
				height: 300px;
                border-radius: 10px;
                box-shadow: 0 8px 10px 0 rgba( 31, 38, 135, 0.37 );
                
							
			@media only screen and (max-width: 1200px) {
					width: 200px;
					height: 200px;
			}

			@media only screen and (max-width: 800px) {
				width: 140px;
				height: 140px;
			}

			@media only screen and (max-width: 400px) {
				width: 100px;
				height: 100px;
			}
        
          
		}
			button {
            padding: 0px;
            margin:0px;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: transparent;
			border: none;
		}	
`;

const Title = styled.h1`
  font-family: 'Inconsolata', monospace;
  font-size: 4em;
  font-weight: 800;
  text-align: center;
  color: Grey;
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  padding: 0;
  margin:0;
  background: #dfe6e9;
`;

const ImageData = () => {
    const [gallery, setGallery] = useState({ url: [] });

    // Call to API
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios("https://jsonplaceholder.typicode.com/photos");
            setGallery({ url: data });
        };
        fetchData();
    }, [setGallery]);

    // We use method filter. When you click on the photo it is deleted.
    const deleteButton = (id) => {
        setGallery({ url: gallery.url.filter(d => d.id !== id) });
    }

    return (
        <div>
            <Wrapper>
                <Title>GALLERY</Title>
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    {gallery.url && gallery.url.map(item => (
                        <StyledDiv key={item.id}>
                            <button onClick={() => deleteButton(item.id)}>
                                <img src={item.url} alt={item.title} className="m-1" ></img></button>
                        </StyledDiv>
                    ))}
                </div>
            </Wrapper>
        </div>

    );
}
export default ImageData