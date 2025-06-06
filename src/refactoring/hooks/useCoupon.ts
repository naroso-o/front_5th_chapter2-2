import { useState } from 'react';
import { Coupon } from '../../types.ts';

export const useCoupons = (initialCoupons: Coupon[]) => {
    const [coupons, setCoupons] = useState(initialCoupons);

    const addCoupon = (coupon: Coupon) => {
        const newCoupons = [...coupons, coupon];
        setCoupons(newCoupons);
    };

    return { coupons, addCoupon};
};
