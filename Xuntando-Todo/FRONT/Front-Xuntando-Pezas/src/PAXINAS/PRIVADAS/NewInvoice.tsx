return (
  <div className="estilo-paxinas-app">
    <div className="flex-1">
      <InvoiceHeader
        onCancel={handleCancel}
        onDone={handleDone}
        isRecurring={isRecurringInvoice}
        onRecurringChange={handleRecurringChange}
      />
      <InvoiceDetails
        customers={customers}
        selectedCustomer={selectedCustomerId}
        onCustomerSelect={handleCustomerSelect}
        invoiceNumber={invoiceNumber}
        onInvoiceNumberChange={handleInvoiceNumberChange}
        invoiceDate={invoiceDate}
        onInvoiceDateChange={handleInvoiceDateChange}
        paymentTerm={paymentTerm}
        onPaymentTermChange={handlePaymentTermChange}
        dueDate={dueDate}
        onDueDateChange={handleDueDateChange}
      />
      <InvoiceItemsTable
        items={invoiceItems}
        onItemsChange={handleInvoiceItemsChange}
      />
      <FileUpload
        onFileUploaded={(file) => {
          console.log('Archivo subido en App:', file);
        }}
      />
    </div>
    <MenuLateral url={1} />
  </div>
);