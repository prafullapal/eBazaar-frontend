import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronDown, X } from "lucide-react";

const MultiSelect = React.forwardRef(function MultiSelect(
	{ options, onChange, name },
	ref
) {
	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleOptionClick = (option) => {
		if (selectedOptions.includes(option)) {
			setSelectedOptions(selectedOptions.filter((o) => o !== option));
		} else {
			setSelectedOptions([...selectedOptions, option]);
		}
		onChange(selectedOptions);
	};

	const handleRemoveOption = (optionToRemove) => {
		setSelectedOptions(
			selectedOptions.filter((option) => option !== optionToRemove)
		);
		onChange(selectedOptions.filter((option) => option !== optionToRemove));
	};

	return (
		<Listbox
			value={selectedOptions}
			onChange={(e) => {
				onChange(e);
				setSelectedOptions(e);
			}}
			multiple
			name={name}
			as={"div"}
			ref={ref}
		>
			<Listbox.Label
				className={`flex flex-wrap gap-2 ${
					selectedOptions.length > 0 ? "mb-2" : null
				}`}
			>
				{selectedOptions.map((option, index) => (
					<span
						key={index}
						className={`bg-mantis-500 text-white p-1 flex rounded-md text-sm items-center gap-2`}
					>
						{option?.name}
						<button
							onClick={(e) => {
								e.preventDefault();
								handleRemoveOption(option);
							}}
						>
							<X strokeWidth={3} size={12} className={`hover:text-red-500`} />
						</button>
					</span>
				))}
			</Listbox.Label>
			<Listbox.Button
				className={`w-full py-2 pl-2 pr-1 bg-mantis-100 rounded-md border border-mantis-500 flex flex-row items-center justify-between`}
			>
				<p>Select Category</p>
				<ChevronDown size={14} />
			</Listbox.Button>
			<div className="relative">
				<Listbox.Options
					className={`absolute bg-white w-full overflow-y-auto h-36 border border-gray-200 rounded-md p-1`}
				>
					{options?.map((option) => (
						<Listbox.Option
							key={option._id}
							value={option}
							onClick={() => handleOptionClick(option)}
						>
							{({ active, selected }) => (
								<li
									className={`px-1 flex justify-between items-center rounded-md ${
										active ? "bg-mantis-500 text-white" : "bg-white text-black"
									}`}
								>
									{option.name}
									{selected && <CheckIcon size={14} strokeWidth={3} />}
								</li>
							)}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</div>
		</Listbox>
	);
});

export default MultiSelect;
