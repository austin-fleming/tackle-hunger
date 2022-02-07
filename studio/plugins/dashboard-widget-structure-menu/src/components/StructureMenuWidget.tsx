import React from 'react';
import FileIcon from 'part:@sanity/base/file-icon';
import FolderIcon from 'part:@sanity/base/folder-icon';
import { Link } from 'part:@sanity/base/router';
import styles from './StructureMenuWidget.css';

function getIconComponent(item) {
  if (item.icon) return item.icon;
  if (!item.schemaType) return FileIcon;
  return item.schemaType.icon || FolderIcon;
}

const StructureMenuWidget = (props) => (
  <div className={styles.root}>
    <div className={styles.header}>
      <h3 className={styles.title}>Editable Content Types</h3>
    </div>

    <div className={styles.content}>
      {props.structure.items.map((item) => {
        const Icon = getIconComponent(item);
        return (
          <div key={item.id} style={{ flex: '1 1 0px' }}>
            <Link className={styles.link} href={`/desk/${item.id}`}>
              <div className={styles.iconWrapper}>
                <Icon />
              </div>
              <div>{item.title}</div>
            </Link>
          </div>
        );
      })}
    </div>
  </div>
);

export default StructureMenuWidget;
