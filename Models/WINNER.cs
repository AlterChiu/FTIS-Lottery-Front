using Dou.Misc.Attr;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Spatial;

namespace FtisHelperDrawGame.DB.Model
{
    [Table("WINNER")]
    public partial class WINNER
    {
        [ColumnDef(Display = "����", EditType = EditType.Select, SelectGearingWith = "FNO,DCODE",
            SelectItemsClassNamespace = DepartmentSelectItemsClassImp.AssemblyQualifiedName, 
            Filter = true, FilterAssign = FilterAssignType.Contains, Sortable = true)]
        [StringLength(2)]
        public string DCODE { get; set; }

        [Key]
        [Column(Order = 0)]
        [ColumnDef(Display = "���u�W��", EditType = EditType.TextList, SelectItemsClassNamespace = EmpSelectItemsClassImp.AssemblyQualifiedName
            , Filter = true, FilterAssign = FilterAssignType.Contains, Sortable = true)]
        [StringLength(6)]
        public string FNO { get; set; }

        [ColumnDef(Display = "���u�s��", VisibleEdit = false)]
        public string FNO2
        {
            get
            {
                var data = Helpe.Employee.GetEmployee(this.FNO);

                if (data != null)
                {
                    var rssi = data.Fno;
                    return rssi.ToString();
                }
                else
                {
                    return "";
                }
            }
        }

        [Key]
        [Column(Order = 1)]
        [ColumnDef(Display = "����", EditType = EditType.Select, SelectGearingWith = "PRIZE,ACTID", SelectItemsClassNamespace = ActIDSelectItemsClassImp.AssemblyQualifiedName
            , Filter = true, FilterAssign = FilterAssignType.Contains, Sortable = true)]
        public string ACTID { get; set; }

        [Key]
        [Column(Order = 2)]
        [ColumnDef(Display = "����", EditType = EditType.Select, SelectItemsClassNamespace = PrizesSelectItemsClassImp.AssemblyQualifiedName
            , Filter = true, FilterAssign = FilterAssignType.Contains, Sortable = true)]
        [StringLength(50)]
        public string PRIZE { get; set; }

        [ColumnDef(Display = "��s�ɶ�", Sortable = true, Visible = false, VisibleEdit = false)]
        public DateTime? UPDATETIME { get; set; }
    }
}
