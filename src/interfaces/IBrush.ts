import settings from '../brushesSetting';

export default interface IBrush{
    onDown({event, context}),
    onMove({event, context}),
    onUp({event, context}),
    onMouseOut(),
}
