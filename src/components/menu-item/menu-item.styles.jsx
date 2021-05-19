import styled from 'styled-components';

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: ${ ({ size }) => (size == 'large' ? '30em' : '240px') };
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    
    &:hover {
        cursor: pointer;
    
        & .background-image {
            transform: scale(1.05);
            transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
    
        & .content {
            opacity: 0.9;
        }
    }
    
    &:first-child {
        margin-right: 7.5px;
    }
    
    &:last-child {
        margin-right: 7.5px;
    }
`;

export const MenuItemBackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: ${ ({ imageUrl }) => `url(${ imageUrl })` }
`;

export const MenuItemContent = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    user-select: none;
`;

export const MenuItemContentTitle = styled.div`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;

export const MenuItemContentSubtitle = styled.div`
    font-weight: lighter;
    font-size: 16px;
`;