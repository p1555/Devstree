import styles from './Container.module.css'
//using props
// const Container = (props) =>{
//    return(
//       <div className={styles.container}>{props.children}</div>
//    )
// }
// export default Container


//destructuring
const Container = ({children}) =>{
   return(
      <div className={styles.container}>{children}</div>
   )
}
export default Container