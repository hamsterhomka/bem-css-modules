import block from 'bem-css-modules'
import styles from '../styles/Button.module.scss'

block.setSettings({
  throwOnError: true,
  modifierDelimiter: '_',
  elementDelimiter: '-'
})

const b = block(styles)

console.log(styles)

export default function Home() {
  return (
    <div className={ b() }>
      <div className={ b('icon', { color: 'white' }) } />
      <div className={ b('inner') } />
    </div>
  )
}
