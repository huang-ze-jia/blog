import clsx from 'clsx';
import PrimitiveLink from 'next/link';
import React from 'react';
import css from './index.module.css';

type Props = React.ComponentProps<typeof PrimitiveLink>;

function Link({ children, className, ref, ...rest }: Props) {
    return (
        <PrimitiveLink ref={ref} className={clsx(css.container, className)} {...rest}>
            {children}
        </PrimitiveLink>
    );
}

export default Link;
