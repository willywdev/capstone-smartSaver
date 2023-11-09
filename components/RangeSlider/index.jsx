import { useEffect, useState } from "react";
import {
  RangeButton,
  RangeSlider,
  SelectedRangeValue,
  RangeSliderContainer,
} from "@/design-system/StyledRangeSlider";
import { CollapsiblePanelContainer } from "@/design-system/StyledFilterExpense";

function AmountRange({ onAmountRangeChange, selectedAmountRange }) {
  const [collapsedRange, setCollapsedRange] = useState(true);
  const [rangeValue, setRangeValue] = useState(0);

  useEffect(() => {
    setRangeValue(selectedAmountRange);
  }, [selectedAmountRange]);

  return (
    <RangeSliderContainer>
      <RangeButton
        onClick={() => {
          setCollapsedRange(!collapsedRange);
        }}
      >
        Select an Amount Range
      </RangeButton>
      <CollapsiblePanelContainer collapsed={collapsedRange}>
        <RangeSlider>
          <input
            type="range"
            min="0"
            max="2000"
            step="1"
            value={rangeValue}
            onChange={(event) => {
              const newValue = parseInt(event.target.value);
              setRangeValue(newValue);
              onAmountRangeChange(newValue);
            }}
          />
          <SelectedRangeValue>{rangeValue} €</SelectedRangeValue>
        </RangeSlider>
      </CollapsiblePanelContainer>
    </RangeSliderContainer>
  );
}

export default AmountRange;
