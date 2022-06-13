import React from 'react';
import { useEffect } from 'react';
import favoriteController from '../../services/CRUD.services/Favorite-controller';
import { setFavorites } from '../../redux/actions/favorites';
import { setListFavoriteItemsId } from '../../redux/actions/id';
import { useSelector, useDispatch } from 'react-redux';

const GetFavorite = () => {
    const dispatch = useDispatch();
    const { userId, favoriteItems } = useSelector(({currentUser, favorites}) => {
        return {
            userId: currentUser.user.id,
            favoriteItems: favorites.items,
        }
    })

    useEffect(() => {
        if (userId !== undefined) {
            favoriteController.getUserFavorites(userId).then(result => {
                if(result) {
                    dispatch(setFavorites(result));
                }
            });
        }
    }, [userId, dispatch]);

    useEffect(() => {
        if(favoriteItems.length > 0) {
            let iId = [];
            favoriteItems.forEach(item => {
                iId.push(item.space.id);
            });
            dispatch(setListFavoriteItemsId(iId));
        }
    }, [favoriteItems, dispatch]);

    React.useEffect(() => {
        if(userId) WebSocket.connect(userId, dispatch);
    }, [userId]);

    return (
        <></>
    );
};

export default GetFavorite;