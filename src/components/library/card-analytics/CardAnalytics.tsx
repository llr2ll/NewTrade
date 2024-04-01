import { DropDownButton } from 'devextreme-react/drop-down-button';
import { CardProps } from '../../../types';
import './CardAnalytics.scss';
import React from 'react';

export const CardAnalytics = ({ 
  title, 
  isLoading = false, 
  children, 
  additionalHeaderContent, 
  menuVisible = true, 
  gridRef,
  height,
  cardHeight
}: React.PropsWithChildren<CardProps>) => (
  <div className="card" style={{ height: height && height }}>
    <div className='header'>
      { gridRef && <DropDownButton items={[{ 
                                      onClick: () => gridRef.current.instance.refresh(), 
                                      text: 'Atualizar', 
                                      icon: 'refresh' 
                                    }]}
                                   dropDownOptions={{ width: '110px' }} 
                                   className='overflow-menu' 
                                   visible={menuVisible} 
                                   showArrowIcon={false} 
                                   stylingMode='text' 
                                   icon='overflow'/>
        
      }
      {title && <div className='title'>{title}</div>}
      {additionalHeaderContent}
    </div>
    {!isLoading && <div className='card-contents' style={{ height: cardHeight && cardHeight }}>{children}</div>}
  </div>
)