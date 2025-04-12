
export default function HeaderNav({email,children,headerInfo}) {
    console.log(email);
    console.log(headerInfo);
    return (
        <>
        {children}
        {headerInfo.mail}
        {headerInfo.phone}
        <h1>Hii I am Header</h1>
        </>
    )
}