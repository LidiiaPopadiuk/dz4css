# dz4css

{title && <h2>{title}</h2>}  =  {title ? <h2 className="title">{title}</h2> : null}
якщо a істинне → повертається b,
якщо a хибне → повертається a (тобто нічого не показується в JSX).