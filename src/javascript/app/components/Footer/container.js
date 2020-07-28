import { connect } from 'react-redux';
import structureToXML from '../../../tools/structureToXML';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  downloadXML: () => {
    dispatch({
      type: 'DOWNLOAD_XML',
    });
  },
  downloadJSON: () => {
    dispatch({
      type: 'DOWNLOAD_JSON',
    });
  },
  executeCompleteReset: () => {
    dispatch({
      type: 'EXECUTE_COMPLETE_RESET',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);