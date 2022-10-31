import { Input, Select } from "@chakra-ui/react";

const InstituteFilter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 items-end gap-5 py-8">
      <div className="space-y-1">
        <p className="text-sm text-gray-600">Nome ou endereço</p>
        <Input _focusVisible={{ borderColor: "#ccc" }} />
      </div>

      <div className="space-y-1">
        <p className="text-sm text-gray-600">Finais de Semana</p>

        <Select
          placeholder=" "
          _placeholder={{ color: "#ccc" }}
          _focusVisible={{ borderColor: "#ccc" }}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>

      <div className="space-y-1">
        <p className="text-sm text-gray-600">Especialidade</p>

        <Select
          placeholder=" "
          _placeholder={{ color: "#ccc" }}
          _focusVisible={{ borderColor: "#ccc" }}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>

      <div className="space-y-1">
        <p className="text-sm text-gray-600">Doações</p>

        <Select
          placeholder=" "
          _placeholder={{ color: "#ccc" }}
          _focusVisible={{ borderColor: "#ccc" }}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
    </div>
  );
};

export default InstituteFilter;
