import loadingIcon from "../../common/image/defoultIcons/loadingIcon.png";
import notDeliveredIcon from "../../common/image/defoultIcons/notDeliveredIcon.png";
import deliveredIcon from "../../common/image/defoultIcons/deliveredIcon.png";
import seenIcon from "../../common/image/defoultIcons/seenIcon.png";
import lookedOverIcon from "../../common/image/defoultIcons/lookedOverIcon.png";
import {MessageStatusType} from "../../../App";


export const DisplayMessageStatus = (status: MessageStatusType) => {
    return (
        (status === 'load') ?
            loadingIcon : (status === 'notDelivery') ?
            notDeliveredIcon : (status === 'delivery') ?
                deliveredIcon : (status === 'seen') ?
                    seenIcon : (status === 'lookedOver') ? lookedOverIcon : undefined
    )
}