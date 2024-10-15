import style from './Pagination.module.scss';

type PaginationProps = {
  activeIndex: number;
  handlePaginationClick: (index: number) => void;
  paginationList: string[];
  progressBarWidth: number;
}

const Pagination = ({ activeIndex, handlePaginationClick, paginationList, progressBarWidth }: PaginationProps) => {
  return (
    <div className={style.pagination}>
      <ul>
        {paginationList.map((list, index) => (
          <li
            key={index + "pagination key"}
            className={`${activeIndex === index ? style.active : ""}`}
            onClick={() => handlePaginationClick(index)}
          >
            {list}
          </li>
        ))}
      </ul>
      <div className={style.progressBar}>
        <div className={style.gauge} style={{ width: `${progressBarWidth}%` }} />
      </div>
    </div>
  );
};

export default Pagination;
