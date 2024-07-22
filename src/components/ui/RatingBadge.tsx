import React, {FC} from 'react';

interface RatingBadgeProps {
    rating: number;
}

const RatingBadge: FC<RatingBadgeProps> = ({rating}) => {
    const getRatingClass = (rating: number) => {
        if (rating >= 8) {
            return 'rating-gold'
        } else if (rating >= 7 && rating < 8) {
            return 'rating-high'
        } else if (rating >= 5 && rating < 7) {
            return 'rating-medium'
        }
        return 'rating-low'
    }

    return (
        <div
            className={getRatingClass(rating)}>{rating.toFixed(1)}
        </div>
    );
};

export default RatingBadge;